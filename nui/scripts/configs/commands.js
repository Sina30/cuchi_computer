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
        "description": () => { return GetLocale("cmd_help_desc"); },
        "action": () => {
            let finalText = "";
            let first = true;
            Object.entries(CommandsList).forEach(entry => {
                const [key, value] = entry;

                finalText += (!first ? "<br>" : "") + " - " + key + ": " + value.description();
                first = false;
            });

            AddConsoleLine("help", finalText);
        }
    },
    "version": {
        "description": () => { return GetLocale("cmd_version_desc") },
        "action": () => {
            AddConsoleLine("version", "version: <span style='color: #4d3dff'>" + ConsoleVersion + "</span> - Cuchi");
        }
    },
    "clear": {
        "description": () => { return GetLocale("cmd_clear_desc") },
        "action": () => {
            ClearConsole();
        }
    },
    "exit": {
        "description": () => { return GetLocale("cmd_exit_desc") },
        "action": () => {
            CloseApp("console");
        }
    },
    "shutdown": {
        "description": () => { return GetLocale("cmd_shutdown_desc") },
        "action": () => {
            ShutdownComputer();
        }
    },
    "start": {
        "description": () => { return GetLocale("cmd_start_desc") },
        "action": (args) => {
            if (args.length > 0) {
                let appSpecified = args[0].replace(".exe", "")
                let openResult = OpenApp(appSpecified);
                if (openResult != 2)
                    AddConsoleLine("start "+args[0], GetLocale(openResult == 1 ? "cmd_started" : "cmd_start_error").replace("{1}", appSpecified));
                else
                    AddConsoleLine("start "+args[0], GetLocale("cmd_start_already").replace("{1}", appSpecified));
            }
            else 
                AddConsoleLine("start", GetLocale("cmd_start_not_specified"));
        }
    },
    "taskkill": {
        "description": () => { return GetLocale("cmd_taskkill_desc") },
        "action": (args) => {
            if (args.length > 0) {
                let appSpecified = args[0].replace(".exe", "")
                let wasRunnning = CloseApp(appSpecified);
                AddConsoleLine("taskkill "+args[0], GetLocale(wasRunnning ? "cmd_taskkilled" : "cmd_taskkill_error").replace("{1}", appSpecified));
            }
            else 
                AddConsoleLine("taskkill", GetLocale("cmd_taskkill_not_specified"));
        }
    }
};
