#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CSAdditionalMatchStats_t {
    int32_t m_numChickensKilled;
    int32_t m_killsWhileBlind;
    int32_t m_bombCarrierkills;
    float32 m_flBurnDamageInflicted;
    float32 m_flBlastDamageInflicted;
    int32_t m_iDinks;
    int32_t m_numRoundsSurvived;
    int32_t m_maxNumRoundsSurvived;
    int32_t m_numRoundsSurvivedTotal;
    int32_t m_iRoundsWonWithoutPurchase;
    int32_t m_iRoundsWonWithoutPurchaseTotal;
    int32_t m_numFirstKills;
    int32_t m_numClutchKills;
    int32_t m_numPistolKills;
    int32_t m_numSniperKills;
    int32_t m_iNumSuicides;
    int32_t m_iNumTeamKills;
    float32 m_flTeamDamage;
};
