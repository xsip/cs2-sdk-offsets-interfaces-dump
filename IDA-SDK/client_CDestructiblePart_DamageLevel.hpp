#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_CSkillInt.hpp"
#include "tier2_CRangeFloat.hpp"

class client_CDestructiblePart_DamageLevel {
    CUtlString m_sName;
    CGlobalSymbol m_sBreakablePieceName;
    int32_t m_nBodyGroupValue;
    client_CSkillInt m_nHealth;
    float32 m_flCriticalDamagePercent;
    client_EDestructiblePartDamagePassThroughType m_nDamagePassthroughType;
    client_DestructiblePartDestructionDeathBehavior_t m_nDestructionDeathBehavior;
    CGlobalSymbol m_sCustomDeathHandshake;
    bool m_bShouldDestroyOnDeath;
    char pad_563[0x3];
    tier2_CRangeFloat m_flDeathDestroyTime;
    char end_pad_564[0x4];
};
