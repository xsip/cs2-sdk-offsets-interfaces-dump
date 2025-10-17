#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class CModelState {
    char _vtable_pad_427[0xd0];
    char m_hModel[0x8];
    CUtlSymbolLarge m_ModelName;
    char pad_428[0xc9];
    bool m_bClientClothCreationSuppressed;
    char pad_429[0xa6];
    uint64_t m_MeshGroupMask;
    char pad_430[0x48];
    char m_nBodyGroupChoices[0x18];
    char pad_431[0x32];
    int8_t m_nIdealMotionType;
    int8_t m_nForceLOD;
    int8_t m_nClothUpdateFlags;
    char end_pad_432[0x13];
};
