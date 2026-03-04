// generated - do not edit!

import {client_C_ModelPointEntity} from './C_ModelPointEntity';
// Class size: 0x1160
// BaseClass: : public CS2::client::C_ModelPointEntity
export const client_C_PointWorldText  = {
	...client_C_ModelPointEntity,
	m_bForceRecreateNextUpdate: 3728n, // bool m_bForceRecreateNextUpdate; |  0xe90 | Schema_Builtin | Size: 0x1
	m_nTextWidthPx: 3752n, // int32_t m_nTextWidthPx; |  0xea8 | Schema_Builtin | Size: 0x4
	m_nTextHeightPx: 3756n, // int32_t m_nTextHeightPx; |  0xeac | Schema_Builtin | Size: 0x4
	m_messageText: 3760n, // char m_messageText[512]; |  0xeb0 | Schema_FixedArray | Size: 0x200
	m_FontName: 4272n, // char m_FontName[64]; |  0x10b0 | Schema_FixedArray | Size: 0x40
	m_BackgroundMaterialName: 4336n, // char m_BackgroundMaterialName[64]; |  0x10f0 | Schema_FixedArray | Size: 0x40
	m_bEnabled: 4400n, // bool m_bEnabled; |  0x1130 | Schema_Builtin | Size: 0x1
	m_bFullbright: 4401n, // bool m_bFullbright; |  0x1131 | Schema_Builtin | Size: 0x1
	m_flWorldUnitsPerPx: 4404n, // float32 m_flWorldUnitsPerPx; |  0x1134 | Schema_Builtin | Size: 0x4
	m_flFontSize: 4408n, // float32 m_flFontSize; |  0x1138 | Schema_Builtin | Size: 0x4
	m_flDepthOffset: 4412n, // float32 m_flDepthOffset; |  0x113c | Schema_Builtin | Size: 0x4
	m_bDrawBackground: 4416n, // bool m_bDrawBackground; |  0x1140 | Schema_Builtin | Size: 0x1
	m_flBackgroundBorderWidth: 4420n, // float32 m_flBackgroundBorderWidth; |  0x1144 | Schema_Builtin | Size: 0x4
	m_flBackgroundBorderHeight: 4424n, // float32 m_flBackgroundBorderHeight; |  0x1148 | Schema_Builtin | Size: 0x4
	m_flBackgroundWorldToUV: 4428n, // float32 m_flBackgroundWorldToUV; |  0x114c | Schema_Builtin | Size: 0x4
	m_Color: 4432n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_nJustifyHorizontal: 4436n, // client::PointWorldTextJustifyHorizontal_t  | Schema_DeclaredEnum | Size: 0x4
	m_nJustifyVertical: 4440n, // client::PointWorldTextJustifyVertical_t  | Schema_DeclaredEnum | Size: 0x4
	m_nReorientMode: 4444n, // client::PointWorldTextReorientMode_t  | Schema_DeclaredEnum | Size: 0x4
}
