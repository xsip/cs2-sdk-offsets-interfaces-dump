#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_CPropDataComponent {
    char pad_1557[0x8];
    void **__vftable_0;
    float32 m_flDmgModBullet;
    float32 m_flDmgModClub;
    float32 m_flDmgModExplosive;
    float32 m_flDmgModFire;
    CUtlSymbolLarge m_iszPhysicsDamageTableName;
    CUtlSymbolLarge m_iszBasePropData;
    int32_t m_nInteractions;
    bool m_bSpawnMotionDisabled;
    char pad_1867[0x3];
    int32_t m_nDisableTakePhysicsDamageSpawnFlag;
    int32_t m_nMotionDisabledSpawnFlag;
};
