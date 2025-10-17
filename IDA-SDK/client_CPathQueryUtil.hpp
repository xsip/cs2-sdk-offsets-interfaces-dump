#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_CPathQueryUtil {
    char vTable1016[0x10];
    CTransform m_PathToEntityTransform;
    char m_vecPathSamplePositions[0x18];
    char m_vecPathSampleParameters[0x18];
    char m_vecPathSampleDistances[0x18];
    bool m_bIsClosedLoop;
    char end_pad_1017[0x7];
};
