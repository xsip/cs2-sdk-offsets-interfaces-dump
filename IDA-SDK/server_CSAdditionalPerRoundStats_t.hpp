#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CSAdditionalPerRoundStats_t {
    int32_t m_numChickensKilled;
    int32_t m_killsWhileBlind;
    int32_t m_bombCarrierkills;
    float32 m_flBurnDamageInflicted;
    float32 m_flBlastDamageInflicted;
    int32_t m_iDinks;
    bool m_bFreshStartThisRound;
    bool m_bBombPlantedAndAlive;
    char pad_2857[0x2];
    int32_t m_nDefuseStarts;
    int32_t m_nHostagePickUps;
    int32_t m_numTeammatesFlashed;
    char end_pad_2858[0xc8];
};
