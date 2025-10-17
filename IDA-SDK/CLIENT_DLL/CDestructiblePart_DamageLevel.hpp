#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "CSkillInt.hpp"
#include "CRangeFloat.hpp"

class CDestructiblePart_DamageLevel {
    CUtlString m_sName;
    CGlobalSymbol m_sBreakablePieceName;
    int32_t m_nBodyGroupValue;
    CSkillInt m_nHealth;
    float32 m_flCriticalDamagePercent;
    EDestructiblePartDamagePassThroughType m_nDamagePassthroughType;
    DestructiblePartDestructionDeathBehavior_t m_nDestructionDeathBehavior;
    CGlobalSymbol m_sCustomDeathHandshake;
    bool m_bShouldDestroyOnDeath;
    char pad_0[0x3];
    CRangeFloat m_flDeathDestroyTime;
    char end_pad_1[0x4];
};
