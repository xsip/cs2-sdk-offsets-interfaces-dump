#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "AmmoIndex_t.hpp"

class CTakeDamageInfo {
    char _vtable_pad_543[0x8];
    Vector m_vecDamageForce;
    VectorWS m_vecDamagePosition;
    VectorWS m_vecReportedPosition;
    Vector m_vecDamageDirection;
    char m_hInflictor[0x4];
    char m_hAttacker[0x4];
    char m_hAbility[0x4];
    float32 m_flDamage;
    float32 m_flTotalledDamage;
    DamageTypes_t m_bitsDamageType;
    int32_t m_iDamageCustom;
    AmmoIndex_t m_iAmmoType;
    char pad_544[0xb];
    float32 m_flOriginalDamage;
    bool m_bShouldBleed;
    bool m_bShouldSpark;
    char pad_545[0xa];
    TakeDamageFlags_t m_nDamageFlags;
    CGlobalSymbol m_sDamageSourceName;
    HitGroup_t m_iHitGroupId;
    int32_t m_nNumObjectsPenetrated;
    float32 m_flFriendlyFireDamageReductionRatio;
    char pad_546[0x7c];
    char m_nDestructibleHitGroupsToForceDestroy[0x18];
    bool m_bInTakeDamageFlow;
    char pad_547[0x7];
};
