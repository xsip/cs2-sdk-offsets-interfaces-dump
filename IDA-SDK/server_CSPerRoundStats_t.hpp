#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CSPerRoundStats_t {
    char vTable4009[0x30];
    int32_t m_iKills;
    int32_t m_iDeaths;
    int32_t m_iAssists;
    int32_t m_iDamage;
    int32_t m_iEquipmentValue;
    int32_t m_iMoneySaved;
    int32_t m_iKillReward;
    int32_t m_iLiveTime;
    int32_t m_iHeadShotKills;
    int32_t m_iObjective;
    int32_t m_iCashEarned;
    int32_t m_iUtilityDamage;
    int32_t m_iEnemiesFlashed;
    char end_pad_4010[0x4];
};
