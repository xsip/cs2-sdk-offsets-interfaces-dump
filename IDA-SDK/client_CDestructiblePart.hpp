#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_CDestructiblePart {
    CGlobalSymbol m_DebugName;
    client_HitGroup_t m_nHitGroup;
    bool m_bDisableHitGroupWhenDestroyed;
    char pad_1705[0x3];
    char m_nOtherHitgroupsToDestroyWhenFullyDestructed[0x18];
    bool m_bOnlyDestroyWhenGibbing;
    char pad_1706[0x7];
    CGlobalSymbol m_sBodyGroupName;
    char m_DamageLevels[0x18];
};
