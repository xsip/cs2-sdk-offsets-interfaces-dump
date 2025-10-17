#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "CNetworkVarChainer.hpp"

class CDestructiblePartsComponent {
    CNetworkVarChainer __m_pChainEntity;
    char pad_345[0x20];
    char m_vecDamageTakenByHitGroup[0x18];
    char m_hOwner[0x4];
    int32_t m_nLastHitDamageLevel;
};
