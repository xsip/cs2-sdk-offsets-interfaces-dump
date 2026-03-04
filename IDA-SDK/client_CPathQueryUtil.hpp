#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_CPathQueryUtil {
    void **__vftable_0;
    void **__vftable_1;
    CTransform m_PathToEntityTransform;
    char m_vecPathSamplePositions[0x18];
    char m_vecPathSampleParameters[0x18];
    char m_vecPathSampleDistances[0x18];
    bool m_bIsClosedLoop;
    char end_pad_1830[0x7];
};
