import { setFailed, setOutput } from "@actions/core";

async function main() {
    try {
        setOutput("foo", JSON.stringify({
            foo: "bar"
        }));
    } catch (err) {
        if (err instanceof Error) setFailed(err);
    }
}

main();
