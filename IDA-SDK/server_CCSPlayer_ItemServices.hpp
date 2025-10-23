#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class server_CCSPlayer_ItemServices {
    char vTable1208[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_1209[0x10];
    char pad_3418[0x40];
    bool m_bHasDefuser;
    bool m_bHasHelmet;
    char end_pad_3417[0x6];
};
