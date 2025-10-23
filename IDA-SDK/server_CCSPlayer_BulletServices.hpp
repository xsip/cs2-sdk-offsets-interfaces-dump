#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class server_CCSPlayer_BulletServices {
    char vTable1208[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_1209[0x10];
    int32_t m_totalHitsOnServer;
    char end_pad_3414[0x24];
};
