import { Text, Box, Link } from "@chakra-ui/react"
import { IconType } from "react-icons";



interface Props {
  icon:IconType,
  color: string,
  site: string
}

const Links = (props: Props) => {
const {icon:Icon} = props;
  return (
    <Text>
      <Box color={props.color}>
        <Link href={props.site} isExternal>
          <Icon size='2.5rem' />  
        </Link>
        {/* <a href={props.site}><Icon size='2.5rem' /></a> */}
      </Box>
    
    </Text>
  )
}

export default Links