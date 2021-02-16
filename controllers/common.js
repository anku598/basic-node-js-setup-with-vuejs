const fs = require('fs');
const path = require("path");

const KEYS = require("../keys");

function get_logs() {
  let file_name = path.join(__dirname, `../${KEYS.PATH}`, KEYS.LOGS)
  let rawdata = fs.readFileSync(file_name);
  let logs = JSON.parse(rawdata);
  return logs;
}
function get_agents() {
  let file_name = path.join(__dirname, `../${KEYS.PATH}`, KEYS.AGENTS)
  let rawdata = fs.readFileSync(file_name);
  let agents = JSON.parse(rawdata);
  let data = {}
  agents.forEach(element => {
    data[element.identifier] = element
  });
  return data;
}
function get_regoulation() {
  let file_name = path.join(__dirname, `../${KEYS.PATH}`, KEYS.RESOULATION)
  let rawdata = fs.readFileSync(file_name);
  let agents = JSON.parse(rawdata);
  let data = {}
  agents.forEach(element => {
    data[element.identifier] = element.resolution
  });
  return data;
}

exports.home = async (req, res, next) => {
  let customData = {}
  try {
    let logs = get_logs();
    logs.forEach(element => {
      if (!customData[element.number]) {
        customData[element.number] = [element]
      } else {
        customData[element.number].push(element)
      }
    });
  }
  catch (err) {
    console.log(err)
    return res.status(500).json({ message: "File Problem" });
  }
  let agent = get_agents();

  let result = [];
  try {
    for (const number in customData) {
      const object = customData[number];
      const last = object[object.length - 1];
      const _agent = agent[last.agentIdentifier];
      console.log(_agent, last.agentIdentifier)
      const data = {
        agentId: last.agentIdentifier,
        number,
        numberOfCall: object.length,
        name: _agent.firstName + " " + _agent.lastName,
        duration: last.duration
      };
      result.push(data);
    }
  }
  catch (err) {
    return res.status(500).json({ message: "Data Manupulation problem" });
  }
  res.status(200).json(result);
};

exports.agent = async (req, res, next) => {
  const ID = req.params.id;
  const result = []
  try {
    const regoulation = get_regoulation();
    const logs = get_logs();
    logs.forEach(element => {
      if (element.agentIdentifier == ID) {
        result.push({
          number: element.number,
          dateTime: element.dateTime,
          resolution: regoulation[element.identifier]
        })
      }
    });
  }
  catch (err) {
    console.log(err)
    return res.status(500).json({ message: "Data extracting problem" });
  }
  res.status(200).json(result);
};

exports.call = async (req, res, next) => {
  const NUMBER = req.params.number;
  const result = []
  try {
    const logs = get_logs();
    const agents = get_agents();
    const regoulation = get_regoulation();
    logs.forEach(element => {
      if (element.number == NUMBER) {
        const agent = agents[element.agentIdentifier]
        result.push({
          name: agent.firstName + " " + agent.lastName,
          resolution: regoulation[element.identifier],
          dateTime: element.dateTime,
        })
      }
    });
  }
  catch (err) {
    console.log(err)
    return res.status(500).json({ message: "Data extracting problem" });
  }
  res.status(200).json(result);
};

