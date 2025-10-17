#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class client_C_SingleplayRules {
    char vTable1287[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    int32_t m_nTotalPausedTicks;
    int32_t m_nPauseStartTick;
    bool m_bGamePaused;
    char pad_1288[0x7];
};
