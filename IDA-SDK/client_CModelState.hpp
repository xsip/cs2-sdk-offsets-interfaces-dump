#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_CModelState {
    char vTable1001[0xd0];
    char m_hModel[0x8];
    CUtlSymbolLarge m_ModelName;
    char pad_1002[0xc9];
    bool m_bClientClothCreationSuppressed;
    char pad_1003[0xa6];
    uint64_t m_MeshGroupMask;
    char pad_1004[0x48];
    char m_nBodyGroupChoices[0x18];
    char pad_1005[0x32];
    int8_t m_nIdealMotionType;
    int8_t m_nForceLOD;
    int8_t m_nClothUpdateFlags;
    char end_pad_1006[0x13];
};
