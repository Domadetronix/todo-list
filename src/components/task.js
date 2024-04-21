import React from "react";

const Task = (props) => {
    return (
        <li className={props.condition}>
            <div class="view">
                <input class="toggle" type="checkbox" />
                <label>
                    <span class="description">{props.name}</span>
                    <span class="created">created 5 minutes ago</span>
                </label>
                <button class="icon icon-edit"></button>
                <button class="icon icon-destroy"></button>
            </div>
        </li>

    )
}

export default Task