#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "CNetworkVarChainer.hpp"

class CCSPlayerController_InGameMoneyServices {
    char _vtable_pad_291[0x8];
    CNetworkVarChainer __m_pChainEntity;
    char end_pad_292[0x10];
    int32_t m_iAccount;
    int32_t m_iStartAccount;
    int32_t m_iTotalCashSpent;
    int32_t m_iCashSpentThisRound;
};
