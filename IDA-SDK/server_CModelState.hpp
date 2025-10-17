#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CModelState {
    char vTable3795[0xd0];
    char m_hModel[0x8];
    CUtlSymbolLarge m_ModelName;
    char pad_3796[0x45];
    bool m_bClientClothCreationSuppressed;
    char pad_3797[0xaa];
    uint64_t m_MeshGroupMask;
    char pad_3798[0x48];
    char m_nBodyGroupChoices[0x18];
    char pad_3799[0x32];
    int8_t m_nIdealMotionType;
    int8_t m_nForceLOD;
    int8_t m_nClothUpdateFlags;
    char end_pad_3800[0x13];
};
