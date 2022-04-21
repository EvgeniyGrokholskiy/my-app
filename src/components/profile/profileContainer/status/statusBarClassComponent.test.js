import React from "react";
import {create} from "react-test-renderer";
import StatusClassComponent from "./statusBarWithHooks";


describe("statusBarClassComponent",() => {

    test ("sliderEvaluation should be defined",() => {
        const bar = create(<StatusClassComponent/>);
        expect(bar).toBeDefined()
    })

    test ("after creation span should be displayed with correct data", () => {
        const component = create(<StatusClassComponent profileStatus={"test status"} />);
        const root = component.root
        const span = root.findAllByType("span")
        expect(span[0].children[0]).toBe("test status")
    })

    test ("after creation input should`t be displayed", () => {
        const component = create(<StatusClassComponent profileStatus={"test status"} />);
        const root = component.root
        const input = root.findAllByType("input")
        expect(input).toStrictEqual([])
    })

    test ("input should be displayed in editMode instead of span", () => {
        const component = create(<StatusClassComponent profileStatus={"test status"} />);
        const root = component.root;
        const span = root.findAllByType("span");
        span[0].props.onClick();
        const input = root.findAllByType("input");
        expect(input[0].props.value).toBe("test status")
    })
})

