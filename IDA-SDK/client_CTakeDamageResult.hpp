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
    bool m_bWasDamageSuppressed;
    char pad_1651[0x7];
};
