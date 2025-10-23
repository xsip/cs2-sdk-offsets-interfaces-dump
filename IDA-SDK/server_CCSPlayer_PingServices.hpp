#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"
#include "entity2_GameTime_t.hpp"

class server_CCSPlayer_PingServices {
    char vTable1208[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_1209[0x10];
    entity2_GameTime_t m_flPlayerPingTokens[5];
    char m_hPlayerPing[0x4];
};
