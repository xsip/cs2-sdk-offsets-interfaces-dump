#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class server_CTeamplayRules {
    void **__vftable_0;
    entity2_CNetworkVarChainer __m_pChainEntity;
    char m_szQuestName[128];
    int32_t m_nQuestPhase;
    uint32_t m_nLastMatchTime;
    uint64_t m_nLastMatchTime_MatchID64;
    int32_t m_nTotalPausedTicks;
    int32_t m_nPauseStartTick;
    bool m_bGamePaused;
    char pad_3455[0x7];
    char pad_3453[0xd0];
    char pad_3452[0xd0];
};
