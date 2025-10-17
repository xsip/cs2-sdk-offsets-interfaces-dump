#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class server_CCSPlayerController_InGameMoneyServices {
    char vTable854[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char end_pad_855[0x10];
    bool m_bReceivesMoneyNextRound;
    char pad_3378[0x3];
    int32_t m_iMoneyEarnedForNextRound;
    int32_t m_iAccount;
    int32_t m_iStartAccount;
    int32_t m_iTotalCashSpent;
    int32_t m_iCashSpentThisRound;
};
