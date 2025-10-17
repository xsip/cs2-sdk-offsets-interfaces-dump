#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class server_CTeamplayRules {
    char vTable3331[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char m_szQuestName[128];
    int32_t m_nQuestPhase;
    int32_t m_nTotalPausedTicks;
    int32_t m_nPauseStartTick;
    bool m_bGamePaused;
    char pad_3332[0x3];
    char pad_3330[0xc0];
    char pad_3329[0xc0];
};
