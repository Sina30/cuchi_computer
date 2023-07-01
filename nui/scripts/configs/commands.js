/*
 * ⚠️ WARNING ⚠️
 * Modifying this code without 
 * proper knowledge can result 
 * in its failure. 
 * 
 * Handle with care to avoid breaking it.
*/

var ConsoleVersion = "0.0.0";
const ConsolePrefix = "<span style='color: #6d6d9b'>user@laptop</span>:<span style='color: #4d3dff'>~</span># ";
const CommandsList = {
    "help": {
        "description": GetLocale("cmd_help_desc"),
        "action": () => {
            let finalText = "";
            let first = true;
            Object.entries(CommandsList).forEach(entry => {
                const [key, value] = entry;

                finalText += (!first ? "<br>" : "") + " - " + key + ": " + value.description;
                first = false;
            });

            AddConsoleLine("help", finalText);
        }
    },
    "version": {
        "description": GetLocale("cmd_version_desc"),
        "action": () => {
            AddConsoleLine("version", "version: <span style='color: #4d3dff'>" + ConsoleVersion + "</span> - Cuchi");
        }
    },
    "clear": {
        "description": GetLocale("cmd_clear_desc"),
        "action": () => {
            ClearConsole();
        }
    },
    "exit": {
        "description": GetLocale("cmd_exit_desc"),
        "action": () => {
            CloseApp("console");
        }
    }
};
