#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "CNetworkVarChainer.hpp"

class CCSPlayerController_DamageServices {
    char _vtable_pad_291[0x8];
    CNetworkVarChainer __m_pChainEntity;
    char end_pad_292[0x10];
    int32_t m_nSendUpdate;
    char pad_293[0x4];
    char m_DamageList[0x68];
};
