#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class server_CCSPlayerController_DamageServices {
    char vTable854[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char end_pad_855[0x10];
    int32_t m_nSendUpdate;
    char pad_3377[0x4];
    char m_DamageList[0x88];
};
