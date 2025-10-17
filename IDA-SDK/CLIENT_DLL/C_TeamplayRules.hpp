#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "CNetworkVarChainer.hpp"

class C_TeamplayRules {
    char _vtable_pad_725[0x8];
    CNetworkVarChainer __m_pChainEntity;
    int32_t m_nTotalPausedTicks;
    int32_t m_nPauseStartTick;
    bool m_bGamePaused;
    char pad_726[0x7];
    char pad_724[0x40];
    char pad_723[0x40];
};
