#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_AmmoIndex_t.hpp"

class client_CTakeDamageInfo {
    char vTable1116[0x8];
    Vector m_vecDamageForce;
    VectorWS m_vecDamagePosition;
    VectorWS m_vecReportedPosition;
    Vector m_vecDamageDirection;
    char m_hInflictor[0x4];
    char m_hAttacker[0x4];
    char m_hAbility[0x4];
    float32 m_flDamage;
    float32 m_flTotalledDamage;
    client_DamageTypes_t m_bitsDamageType;
    int32_t m_iDamageCustom;
    client_AmmoIndex_t m_iAmmoType;
    char pad_1117[0xb];
    float32 m_flOriginalDamage;
    bool m_bShouldBleed;
    bool m_bShouldSpark;
    char pad_1118[0xa];
    client_TakeDamageFlags_t m_nDamageFlags;
    CGlobalSymbol m_sDamageSourceName;
    client_HitGroup_t m_iHitGroupId;
    int32_t m_nNumObjectsPenetrated;
    float32 m_flFriendlyFireDamageReductionRatio;
    char pad_1119[0x7c];
    char m_nDestructibleHitGroupsToForceDestroy[0x18];
    bool m_bInTakeDamageFlow;
    char pad_1120[0x7];
};
