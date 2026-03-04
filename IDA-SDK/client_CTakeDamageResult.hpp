#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class client_CTakeDamageInfo;

class client_CTakeDamageResult {
    client_CTakeDamageInfo* m_pOriginatingInfo;
    int32_t m_nHealthLost;
    int32_t m_nHealthBefore;
    int32_t m_nDamageDealt;
    float32 m_flPreModifiedDamage;
    int32_t m_nTotalledHealthLost;
    int32_t m_nTotalledDamageDealt;
    float32 m_flTotalledPreModifiedDamage;
    bool m_bWasDamageSuppressed;
    bool m_bSuppressFlinch;
    char pad_2463[0x2];
    client_HitGroup_t m_nOverrideFlinchHitGroup;
    char pad_2464[0x4];
};
