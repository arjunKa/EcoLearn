
import {
    Progress,

} from "reactstrap";

const ProgressBarTrees = ({calc}) => {


    return (
        <div>
            <Progress
                className="my-2"
                value="25"
            >
                {calc.amount_carbon} carbon reduction
            </Progress>
            <Progress
                className="my-2"
                value={calc.amount_carbon}
            >
                1/2
            </Progress>

        </div>

    );

};

export default ProgressBarTrees;