#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class CPathQueryUtil {
    char _vtable_pad_453[0x10];
    CTransform m_PathToEntityTransform;
    char m_vecPathSamplePositions[0x18];
    char m_vecPathSampleParameters[0x18];
    char m_vecPathSampleDistances[0x18];
    bool m_bIsClosedLoop;
    char end_pad_454[0x7];
};
