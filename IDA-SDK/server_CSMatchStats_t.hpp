#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CSMatchStats_t {
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
    int32_t m_iEnemy5Ks;
    int32_t m_iEnemy4Ks;
    int32_t m_iEnemy3Ks;
    int32_t m_iEnemyKnifeKills;
    int32_t m_iEnemyTaserKills;
    int32_t m_iEnemy2Ks;
    int32_t m_iUtility_Count;
    int32_t m_iUtility_Successes;
    int32_t m_iUtility_Enemies;
    int32_t m_iFlash_Count;
    int32_t m_iFlash_Successes;
    float32 m_flHealthPointsRemovedTotal;
    float32 m_flHealthPointsDealtTotal;
    int32_t m_nShotsFiredTotal;
    int32_t m_nShotsOnTargetTotal;
    int32_t m_i1v1Count;
    int32_t m_i1v1Wins;
    int32_t m_i1v2Count;
    int32_t m_i1v2Wins;
    int32_t m_iEntryCount;
    int32_t m_iEntryWins;
    char end_pad_4008[0x4];
};
