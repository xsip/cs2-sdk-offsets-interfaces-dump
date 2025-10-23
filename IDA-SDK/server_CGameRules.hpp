#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class server_CGameRules {
    char vTable3330[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char m_szQuestName[128];
    int32_t m_nQuestPhase;
    int32_t m_nTotalPausedTicks;
    int32_t m_nPauseStartTick;
    bool m_bGamePaused;
    char pad_3331[0x3];
};
