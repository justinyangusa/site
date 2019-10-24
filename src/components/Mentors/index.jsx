import React, { Component } from "react";
import styled from "styled-components";
import MentorsBlock from "./mentors";
const ment = [
    {
        name: "Albert Kong",
        bio:
            "I am a tryhard Computer Engineer who spends ridiculous amounts of time doing tasks that take normal people 2 minutes.",
        pp:
            "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/57174829_859633871043104_4968634539875237888_o.jpg?_nc_cat=108&_nc_oc=AQnX8Ag2NqAG5HUIlg6IywHJIQV-qU9Xf5M7hs3f0dH9HBVFuaMa45zq1_Q8jiWd-Cg&_nc_ht=scontent-ort2-2.xx&oh=c54d0e73627596a311252e3ce025b4fd&oe=5E1DA543",
    },
    {
        name: "Albert Kong",
        bio:
            "I am a tryhard Computer Engineer who spends ridiculous amounts of time doing tasks that take normal people 2 minutes.",
        pp:
            "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/57174829_859633871043104_4968634539875237888_o.jpg?_nc_cat=108&_nc_oc=AQnX8Ag2NqAG5HUIlg6IywHJIQV-qU9Xf5M7hs3f0dH9HBVFuaMa45zq1_Q8jiWd-Cg&_nc_ht=scontent-ort2-2.xx&oh=c54d0e73627596a311252e3ce025b4fd&oe=5E1DA543",
    },
    {
        name: "Albert Kong",
        bio:
            "I am a tryhard Computer Engineer who spends ridiculous amounts of time doing tasks that take normal people 2 minutes.",
        pp:
            "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/57174829_859633871043104_4968634539875237888_o.jpg?_nc_cat=108&_nc_oc=AQnX8Ag2NqAG5HUIlg6IywHJIQV-qU9Xf5M7hs3f0dH9HBVFuaMa45zq1_Q8jiWd-Cg&_nc_ht=scontent-ort2-2.xx&oh=c54d0e73627596a311252e3ce025b4fd&oe=5E1DA543",
    },
];

export default class Mentors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mentors: [],
        };
    }

    componentDidMount() {
        this.setState({
            mentors: ment,
        });
        //nvm do something here later
    }
    render() {
        return (
            <div>
                {this.state.mentors.map((e) => (
                    <MentorsBlock name={e.name} pp={e.pp} bio={e.bio}/>
                ))}
            </div>
        );
    }
}
