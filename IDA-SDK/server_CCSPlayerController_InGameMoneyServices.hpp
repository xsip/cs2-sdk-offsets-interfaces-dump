#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class server_CCSPlayerController_InGameMoneyServices {
    void **__vftable_0;
    entity2_CNetworkVarChainer __m_pChainEntity;
    char end_pad_1643[0x10];
    bool m_bReceivesMoneyNextRound;
    char pad_3501[0x3];
    int32_t m_iMoneyEarnedForNextRound;
    int32_t m_iAccount;
    int32_t m_iStartAccount;
    int32_t m_iTotalCashSpent;
    int32_t m_iCashSpentThisRound;
};
