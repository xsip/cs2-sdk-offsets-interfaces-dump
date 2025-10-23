#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class server_CDestructiblePartsComponent {
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_3478[0x20];
    char m_vecDamageTakenByHitGroup[0x18];
    char m_hOwner[0x4];
    int32_t m_nLastHitDamageLevel;
};
