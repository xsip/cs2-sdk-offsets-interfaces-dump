#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animationsystem_CCompressorGroup {
    int32_t m_nTotalElementCount;
    char pad_432[0x4];
    char m_szChannelClass[0x18];
    char m_szVariableName[0x18];
    char m_nType[0x18];
    char m_nFlags[0x18];
    char m_szGrouping[0x18];
    char m_nCompressorIndex[0x18];
    char m_szElementNames[0x18];
    char m_nElementUniqueID[0x18];
    char m_nElementMask[0x18];
    char pad_433[0x18];
    char m_vectorCompressor[0x18];
    char m_quaternionCompressor[0x18];
    char m_intCompressor[0x18];
    char m_boolCompressor[0x18];
    char m_colorCompressor[0x18];
    char m_vector2DCompressor[0x18];
    char m_vector4DCompressor[0x18];
};
