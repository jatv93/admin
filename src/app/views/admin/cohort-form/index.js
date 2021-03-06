import React from "react";
import { IconButton, Icon, Button, Grid } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import CohortStudents from "./CohortStudents";
import CohortDetails from "./CohortDetails";
import DowndownMenu from "../../../components/DropdownMenu"

const options = [
  { label: "Change cohort stage", value: "change_stage" },
  { label: "Cohort Detailed Report", value: "cohort_deport" },
];

const Invoice2 = () => {
    const { slug } = useParams();

  return (
    <div className="m-sm-30">
      <div className="flex flex-wrap justify-between mb-6">
        <div>
          <h3 className="mt-0 mb-4 font-medium text-28">Cohort: {slug}</h3>
          <div className="flex">
            <div className="px-3 text-11 py-3px border-radius-4 text-white bg-green mr-3">
              FINAL_PROJECT
            </div>
          </div>
        </div>

        <DowndownMenu options={options} icon="more_horiz">
            <Button>
                <Icon>playlist_add</Icon>
                Additional Actions
            </Button>
        </DowndownMenu>
      </div>

      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <CohortDetails slug={slug} />
        </Grid>
        <Grid item md={8} xs={12}>
          <CohortStudents slug={slug} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Invoice2;
