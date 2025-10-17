#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CNetworkOriginCellCoordQuantizedVector {
    char vTable2712[0x10];
    uint16_t m_cellX;
    uint16_t m_cellY;
    uint16_t m_cellZ;
    uint16_t m_nOutsideWorld;
    CNetworkedQuantizedFloat m_vecX;
    CNetworkedQuantizedFloat m_vecY;
    CNetworkedQuantizedFloat m_vecZ;
};
