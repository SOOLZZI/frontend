import { useState } from "react";

function SlimAlcoholInfo(alcohol:any) {
    return(
        <div>
            id : {alcohol.id}
            이름: {alcohol.name}
            가격 : {alcohol.price}
            도수 : {alcohol.alcoholByVolume}
            타입: {alcohol.alcoholType}
            원산지 : {alcohol.madeFrom}
            판매자 : {alcohol.seller}
            산도 : {alcohol.acidDegree}
            당도 : {alcohol.sugarDegree}
            보존기간(일) : {alcohol.stroagePeriod}
            탄산여부 : {alcohol.isSparkling}
        </div>
    );
}

export default SlimAlcoholInfo