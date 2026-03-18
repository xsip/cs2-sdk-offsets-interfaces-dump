#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_CModelState {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    void **__vftable_3;
    void **__vftable_4;
    void **__vftable_5;
    void **__vftable_6;
    void **__vftable_7;
    void **__vftable_8;
    void **__vftable_9;
    void **__vftable_10;
    void **__vftable_11;
    void **__vftable_12;
    void **__vftable_13;
    void **__vftable_14;
    void **__vftable_15;
    void **__vftable_16;
    void **__vftable_17;
    void **__vftable_18;
    void **__vftable_19;
    char m_hModel[0x8];
    CUtlSymbolLarge m_ModelName;
    char pad_1803[0xc9];
    bool m_bClientClothCreationSuppressed;
    char pad_1804[0xa6];
    uint64_t m_MeshGroupMask;
    char pad_1805[0x48];
    char m_nBodyGroupChoices[0x18];
    char pad_1806[0x32];
    int8_t m_nIdealMotionType;
    int8_t m_nForceLOD;
    int8_t m_nClothUpdateFlags;
    char end_pad_1807[0x13];
};
