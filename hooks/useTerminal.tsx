import React, { useState, useCallback } from "react";

type Command = {
    command: string;
    output: string | React.ReactNode;
};

export const useTerminal = () => {
    const [history, setHistory] = useState<Command[]>([]);
    const [input, setInput] = useState("");

    const commands: Record<string, (args: string[]) => string | React.ReactNode> = {
        help: () => (
            <div className="space-y-2">
                <p>Available commands:</p>
                <ul className="list-disc list-inside">
                    <li><span className="text-retro-primary">about</span> - Who am I?</li>
                    <li><span className="text-retro-primary">skills</span> - My technical arsenal</li>
                    <li><span className="text-retro-primary">projects</span> - View my missions</li>
                    <li><span className="text-retro-primary">contact</span> - Send a signal</li>
                    <li><span className="text-retro-primary">clear</span> - Clear the terminal</li>
                </ul>
            </div>
        ),
        about: () => "I am Shiv Shakti Mishra, an ETL DataStage Consultant and Data Integration Specialist.",
        skills: () => "DataStage, Snowflake, SQL, Python, Azure, Kafka...",
        projects: () => "Type 'ls projects' to see more.",
        contact: () => "Email: pmishra273@gmail.com | LinkedIn: shivmishra1408",
        clear: () => {
            setHistory([]);
            return "";
        },
    };

    const executeCommand = useCallback((cmd: string) => {
        const [commandName, ...args] = cmd.trim().split(" ");
        const command = commands[commandName.toLowerCase()];

        let output: string | React.ReactNode = "";

        if (command) {
            if (commandName.toLowerCase() === "clear") {
                command(args);
                return;
            }
            output = command(args);
        } else if (cmd.trim() !== "") {
            output = `Command not found: ${commandName}. Type 'help' for a list of commands.`;
        }

        if (cmd.trim() !== "") {
            setHistory((prev) => [...prev, { command: cmd, output }]);
        }
    }, []);

    return {
        history,
        input,
        setInput,
        executeCommand,
    };
};
