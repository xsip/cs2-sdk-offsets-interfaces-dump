#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_CSMatchStats_t {
    char vTable1086[0x30];
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
    char end_pad_1087[0x4];
    int32_t m_iEnemy5Ks;
    int32_t m_iEnemy4Ks;
    int32_t m_iEnemy3Ks;
    int32_t m_iEnemyKnifeKills;
    int32_t m_iEnemyTaserKills;
    char end_pad_1085[0x4];
};
