#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class client_CDestructiblePartsComponent {
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_908[0x20];
    char m_vecDamageTakenByHitGroup[0x18];
    char m_hOwner[0x4];
    int32_t m_nLastHitDamageLevel;
};
