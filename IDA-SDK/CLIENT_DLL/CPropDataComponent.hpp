#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class CPropDataComponent {
    char pad_207[0x8];
    char _vtable_pad_652[0x8];
    float32 m_flDmgModBullet;
    float32 m_flDmgModClub;
    float32 m_flDmgModExplosive;
    float32 m_flDmgModFire;
    CUtlSymbolLarge m_iszPhysicsDamageTableName;
    CUtlSymbolLarge m_iszBasePropData;
    int32_t m_nInteractions;
    bool m_bSpawnMotionDisabled;
    char pad_653[0x3];
    int32_t m_nDisableTakePhysicsDamageSpawnFlag;
    int32_t m_nMotionDisabledSpawnFlag;
};
