#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class client_C_SingleplayRules {
    void **__vftable_0;
    entity2_CNetworkVarChainer __m_pChainEntity;
    int32_t m_nTotalPausedTicks;
    int32_t m_nPauseStartTick;
    bool m_bGamePaused;
    char pad_2139[0x7];
};
